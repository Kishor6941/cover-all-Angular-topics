import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value, searchTerm) {
    if(searchTerm == '') {
      return value
    } else {
      return value.filter((item) => { 
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1})    
    }
  }

}
