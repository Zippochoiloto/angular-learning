import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    return this.revesStr(value)
  }

  revesStr(Str){
    let newStr = ''
    for(let i = Str.length-1;i >=0;i--){
      newStr += Str[i]
    }
    return newStr
  }
}
