import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HEROES} from '../mock-heros';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  myconst = HEROES[12];
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log("TESTING ID" + id);
    //console.log("HERO-DETAILS" + this.myconst );
    this.heroService.sendmessage(id);  
    this.heroService.getHero(id)
      .subscribe(hero => {this.hero = hero;});
    
  //  console.log("HERO-DETAILS"+ this.hero.toString());
  }
  goBack(): void {
    this.location.back();
  }
}
