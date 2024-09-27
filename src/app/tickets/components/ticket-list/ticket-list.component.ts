import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ticket } from "../../model/ticket.entity";
import { TicketService } from "../../services/ticket.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {

  tickets: Array<Ticket> = [];
  displayedColumns: string[] = ['id', 'artist', 'date', 'venue', 'hour', 'price', 'image'];
  dataSource: any;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data: any) => {
      this.tickets = data;
      this.dataSource = new MatTableDataSource(this.tickets);
    });
  }

}
