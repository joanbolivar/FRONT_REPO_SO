import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiServerService } from '../services/api-server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule 
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  form!: FormGroup;
  result: any;


  constructor(private fb: FormBuilder, private service: ApiServerService, private http: HttpClient) { }

ngOnInit(): void {
  this.form = this.fb.group({
    command: ['']
  });
}

onSubmit(): void {
  let command = this.form.get('command')!.value;
  
  console.log(command);
  this.service.getResult(command).subscribe(response => {
   command = '';

     this.result = response.data;
  });

}


}
