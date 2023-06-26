import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})

export class DetalleComponent implements OnInit {

  usuarioId: string | null = "";

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    this.usuarioId = this.router.snapshot.paramMap.get('id');
  }
 
}