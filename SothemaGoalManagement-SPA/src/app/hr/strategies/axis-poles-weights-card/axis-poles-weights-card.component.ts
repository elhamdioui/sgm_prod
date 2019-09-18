import { Component, OnInit, Input } from '@angular/core';

import { HrService } from '../../../_services/hr.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { AxisPole } from './../../../_models/axisPole';
import { Axis } from '../../../_models/axis';


@Component({
  selector: 'app-axis-poles-weights-card',
  templateUrl: './axis-poles-weights-card.component.html',
  styleUrls: ['./axis-poles-weights-card.component.css']
})
export class AxisPolesWeightsCardComponent implements OnInit {
  @Input() axis: Axis;
  axisPoleList: AxisPole[];

  constructor(private hrService: HrService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadAxisPoles();
  }

  loadAxisPoles() {
    this.hrService.getAxisPoleList(this.axis.id).subscribe(
      result => {
        this.axisPoleList = result;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  handleUpdateAxisPole(axisPole: AxisPole) {
    this.hrService
      .updateAxisPoleWeigth(axisPole.axisId, axisPole.poleId, axisPole.weight)
      .subscribe(
        next => {
          this.alertify.success('Mise à jour du pondération réussie');
        },
        error => {
          this.alertify.error(error);
        }
      );
  }
}