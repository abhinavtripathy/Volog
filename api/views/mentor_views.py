from rest_framework import generics
from rest_framework import (
    filters as rest_filters
)

from api.logistics.serializers import MentorSerializer
from api.models import Mentor


class MentorListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all mentors.
    """
    serializer_class = MentorSerializer
    filter_backends = (
        rest_filters.OrderingFilter,
        rest_filters.SearchFilter,
    )
    search_fields = ('user__first_name', 'user__last_name', 'user__email', )
    ordering_fields = ('created_at',)

    @property
    def paginator(self):
        paginator = super().paginator
        print(self.request.query_params)
        if 'full_list' in self.request.query_params:
            paginator = None
        return paginator

    def get_queryset(self):
        if 'all' in self.request.query_params:
            return Mentor.objects.all()
        if 'without_group' in self.request.query_params:
            return Mentor.objects.filter(group__isnull=True)
        return Mentor.objects.all()
