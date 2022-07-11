interface ICreateVehicleDTO {
  id?: string;
  user_id: string;
  name: string;
  description: string;
  plate: string;
  isFavorite?: boolean;
  year: number;
  color: string;
  price: number;
}

export { ICreateVehicleDTO };
