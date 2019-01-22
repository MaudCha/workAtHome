import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as vis from 'vis';


@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.css']
})


export class DiagComponent implements OnInit {

  @ViewChild('visElement') visElement;
  public network;
  public nodes;
  public edges;
  public container;
  public exportArea = (<HTMLInputElement>document.getElementById('input_output'));


  constructor() {
    
   }

  ngOnInit() {
    this.nodes = new vis.DataSet([
    {id: 1, label: 'FPC 1', color : '#247DF5', shape: 'box'},
    {id: 2, label: 'FPC 2', color : '#247DF5', shape: 'box'},
    {id: 'a', label: 'A', color : '#A1C4F3', shape: 'circle'},
    {id: 'b', label: 'B', color : '#A1C4F3', shape: 'circle'},
    {id: 'c', label: 'C', color : '#A1C4F3', shape: 'circle'},
    {id: 'd', label: 'D', color : '#A1C4F3', shape: 'circle'}
  ]);

  // create an array with edges
  this.edges = new vis.DataSet([
    {from: 1, to: 'a' },
    {from: 1, to: 'b' },
    {from: 2, to: 'c' },
    {from: 2, to: 'd' },
    {from: 'c', to: 'a' },
    {from: 'd', to: 'a' },
    {from: 'd', to: 'b' }
  ]);

  // create a network
  this.container = document.getElementById('mynetwork');
  var data = {
    nodes: this.nodes,
    edges: this.edges
  };
  var options = {};
  this.network = new vis.Network(this.container, data, options);

}


}
