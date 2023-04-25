export class User {
  firstName: string | undefined;
  lastName: string | undefined;
  birthdate: number | undefined;
  street: string | undefined;
  zipCode: number | undefined;
  city: string | undefined;
  email: string | undefined;
  customIdName: any | undefined;

  constructor(obj?: any) {
    // the ? above alows you to create a new instance of the class without constructor param obj

    // ? = if exists the obj.firstName else '' (empty string)
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthdate = obj ? obj.birthdate : 0;
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : 0;
    this.city = obj ? obj.city : '';
    this.email = obj ? obj.email : '';
    this.customIdName = obj ? obj.customIdname : '';
  }

  public toJson(): any {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email,
    };
  }
}
