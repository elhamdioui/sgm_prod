import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import { Strategy } from '../../../_models/strategy';

@Component({
  selector: 'app-strategy-edit-modal',
  templateUrl: './strategy-edit-modal.component.html',
  styleUrls: ['./strategy-edit-modal.component.css']
})
export class StrategyEditModalComponent implements OnInit {
  @Output() updateSelectedStrategy = new EventEmitter();

  strategy: Strategy;
  statusList: string[];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

  updateStrategy() {
    this.updateSelectedStrategy.emit(this.strategy);
    this.bsModalRef.hide();
  }

}
