import { Pipe, PipeTransform } from "@angular/core";
import { Users } from "src/models/Users";

@Pipe({
    "name": "printUser"
})
export class PrintUserPipe implements PipeTransform {

    transform(value: Users): string{
        return `${value.id} - ${value.name}`
    }

}