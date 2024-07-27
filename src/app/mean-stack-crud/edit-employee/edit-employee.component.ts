import { Component, OnInit } from '@angular/core';
import { MyDataServiceService } from '../../Services/my-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
 selector: 'app-edit-employee',
 templateUrl: './edit-employee.component.html',
})
export class EditEmployeeComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

 }


