"""
File Name: Views
Purpose: Django views for rendering a variety of data.
Comments:
"""
from django.urls import reverse
from django.views.generic import TemplateView
from django.views.generic.edit import FormView

from auth_backend.modules.common.mixins import LoginRequiredMixin
from auth_backend.modules.user.forms import ProfileForm


class ProfileCreationView(FormView):
    """
    Django View for users to create profiles
    """
    template_name = 'user/profile_create.html'
    form_class = ProfileForm

    def get_success_url(self):
        return reverse('user:profile_create_success')

    def form_valid(self, form):
        form.save()
        self.request.user.is_profile_complete = True
        self.request.user.save()
        return super().form_valid(form)

    def get_form_kwargs(self):
        form_kwargs = super().get_form_kwargs()
        form_kwargs['instance'] = self.request.user
        return form_kwargs


class ProfileSuccessfullyCreatedView(LoginRequiredMixin, TemplateView):
    """
    Django view to redirect users to after they have successfully created their profile.
    """
    template_name = "user/profile_create_success.html"
