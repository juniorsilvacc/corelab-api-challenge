interface ICreateVehicleDTO {
  name: string;
  description: string;
  plate: string;
  isFavorite?: boolean;
  year: number;
  color: string;
  price: number;
}

export { ICreateVehicleDTO };
