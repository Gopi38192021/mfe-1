import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface BreedList {
  breed_id: number,
  source:string
}
@Component({
  selector: 'workspace-one-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
})
export class BreedListComponent implements OnInit {
  breedsList: Array<BreedList> = [];
  constructor(private httpClient: HttpClient, private router: Router) {
    return
  }

  ngOnInit(): void {
    this.httpClient.get(
      `https://rabbit-breed-api.herokuapp.com/breeds-with-images/`
    ).pipe(
      map((breedList: any)=>{
        const list:any = [];
        breedList.forEach((data:any) =>{
          data = {
            breed_id: data?.breed_id,
            source: data?.image
          }
          list.push(data);
        })
        return list;
      })
    )
    .subscribe((data)=>{
      this.breedsList = data;
    })
    return
  }

  cardClick(id:number) {
    this.router.navigate(['breed-info/',id])
  }
}
