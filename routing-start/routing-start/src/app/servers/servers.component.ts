import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private route: Router,
              private active:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReloadServer() {
    console.log(this.active)
    // this.route.navigate(['servers'],{relativeTo:this.active})
  }
}
