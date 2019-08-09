import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { CandidatesComponent } from './candidates/candidates.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { F2FInterviewComponent } from './f2f-interview/f2f-interview.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'candidates', component: CandidatesComponent },
            { path: 'requirements', component: RequirementsComponent },
            { path: 'f2f', component: F2FInterviewComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
