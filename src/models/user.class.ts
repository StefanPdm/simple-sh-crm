export class User {
  firstName: string | undefined;
  lastName: string | undefined;
  birthdate: number | undefined;
  street: string | undefined;
  zipCode: number | undefined;
  city: string | undefined;

  constructor(obj?: any) {
    // the ? above alows you to create a new instance of the class without constructor param obj

    // ? = if exists the obj.firstName else '' (empty string)
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthdate = obj ? obj.birthdate : 0;
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : 0;
    this.city = obj ? obj.city : '';
  }
}
