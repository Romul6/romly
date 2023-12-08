import { Component, OnInit } from "@angular/core";
import { SidebarService } from "../../../services/sidebar.service";
import { Project } from "../../../models/Project";
import { NgClass } from "@angular/common";

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    standalone: true,
    imports: [NgClass],
    providers: [SidebarService]

})

export class SidebarLayout implements OnInit {

    public projects!: Array<Project>
    public sidebarActive: boolean = true
    public firstLoad: boolean = true

    constructor(private sidebarService: SidebarService) {

    }

    ngOnInit(): void {
        this.GetProjects()
    }

    GetProjects() {
        let self = this;
        this.sidebarService.GetProjects().subscribe({
            next(value) {
                self.projects = value
            },
        })
    }


}