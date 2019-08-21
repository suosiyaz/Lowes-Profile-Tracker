import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {title: 'Candidates', text: 'Details of all candidates and their status', navLink: '/candidates'},
    {title: 'Requirements', text: 'List of all requirements and their status', navLink: '/requirements'},
    {title: 'F2F Interview', text: 'Details of candidates shortlisted and their status', navLink: '/f2f'},
    {title: 'Something', text: 'Details of all candidates and their status', navLink: '/'}
  ];

  constructor() { }

  ngOnInit() {}

}
