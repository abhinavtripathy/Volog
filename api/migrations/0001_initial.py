# Generated by Django 3.1.1 on 2020-11-06 03:26

import api.reliability.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ActivityCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('name', models.CharField(max_length=256, verbose_name='Group name')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HourInstance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('date_of_activity', models.DateField(validators=[api.reliability.validators.no_future_dates])),
                ('number_of_hours', models.IntegerField(validators=[api.reliability.validators.hour_instance_validator])),
                ('number_of_minutes', models.IntegerField(blank=True, null=True, validators=[api.reliability.validators.minutes_validator])),
                ('type_of_hour', models.CharField(choices=[('REQ', 'Required'), ('ACT', 'Active (Not Requiring Preapproval)'), ('PRE', 'Active (Preapproval)'), ('REC', 'Receptive')], max_length=3)),
                ('learning_goal', models.CharField(choices=[('CONFIDENCE', 'Gain confidence and skills to identify, define and tackle complex problems that impact communities and transcend borders.'), ('EMPATHY', 'Value empathy, understanding and responsiveness to diverse others in their work and public roles.'), ('EXPLORE', 'Explore and take action on solutions to real-world problems that fulfill the goals of social impact, financial viability, and environmental sustainability.')], max_length=10)),
                ('activity_description', models.TextField(blank=True, null=True)),
                ('approved', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.IntegerField(null=True, unique=True, validators=[api.reliability.validators.student_id_validator])),
                ('class_standing', models.CharField(choices=[('FR', 'Freshman'), ('SO', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('GR', 'Graduate'), ('PG', 'Post Graduate')], max_length=2, null=True)),
                ('DAS_mentor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mentor', to='api.mentor')),
            ],
        ),
        migrations.CreateModel(
            name='StudentGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.group')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.student')),
            ],
        ),
    ]
