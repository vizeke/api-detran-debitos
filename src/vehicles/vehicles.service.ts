import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiclesService {  
  async getTickets(place, owner_document, vehicle_document): Promise<String> {
    return place;
  }
}
