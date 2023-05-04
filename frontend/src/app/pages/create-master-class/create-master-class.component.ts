import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MasterclassService } from 'src/app/services/masterclass.service';
import { IMasterClass } from 'src/app/models/models';
@Component({
  selector: 'app-create-master-class',
  templateUrl: './create-master-class.component.html',
  styleUrls: ['./create-master-class.component.scss']
})
export class CreateMasterClassComponent {

  createMasterClassForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    date: new FormControl('', [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    location: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    maxAttendees: new FormControl(null, Validators.required),
  });



  constructor(private masterClassService: MasterclassService, private dialogRef: MatDialogRef<CreateMasterClassComponent>) { }



  onSubmit(): void {
    if(this.createMasterClassForm.valid){
      const formData = this.createMasterClassForm.value;
      const name = formData.name;
      const date = formData.date;
      const duration = formData.duration;
      const location = formData.location;
      const description = formData.description;
      const image = formData.image;
      const price = formData.price
      const maxAttendees = formData.maxAttendees;

      const newMasterClass : any = {
        name : name!,
        date: date!,
        duration : duration!,
        location : location!,
        description: description!,
        image : image!,
        price : parseInt(price!),
        maxAttendees : maxAttendees!,
        participants : 0,
      }

      this.masterClassService.createMasterClass(newMasterClass).subscribe(
        (response : any) => {
          console.log('Recipe created successfully!', response);
        },
        (error : any) =>{
          console.log('Error: ', error);
        }
      );

      this.dialogRef.close();
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
