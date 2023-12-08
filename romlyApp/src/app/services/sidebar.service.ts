import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Project } from '../models/Project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SidebarService extends BaseService {

  constructor() {
    super()
  }

  public GetProjects(): Observable<Array<Project>> {
    let projects = new Array<Project>
    const project1 = new Project(1, 'Proyecto 1', 'Descripción del Proyecto 1', '')
    const project2 = new Project(2, 'Proyecto 2', 'Descripción del Proyecto 2', '')
    const project3 = new Project(3, 'Proyecto 3', 'Descripción del Proyecto 3', '')

    projects.push(project1, project2, project3)

    return of(projects)
  }

}

