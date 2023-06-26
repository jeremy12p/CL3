import { Component, OnInit } from '@angular/core';
import { Usuario } from '../apitest';
import { ApitestService } from '../apitest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id','direccion' ,'email','nombre', 'password', 'telefono','tipo','username'];

  constructor(
    private apitestService: ApitestService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.apitestService.listarUsuarios()
    .subscribe((data) => {
      this.usuarios = data
    });
  }

  onNavigateToDetail(id: number): void {
    this.router.navigate([id], {relativeTo: this.route});
  }


}
