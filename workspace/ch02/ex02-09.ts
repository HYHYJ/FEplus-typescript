(()=>{
  interface CityDropdown{
    value: string;
    selected: boolean;
  }

  interface ZipcodeDropdown{
    value: number;
    selected: boolean;
  }
  function createDropdown(list: CityDropdown[]):string{
    let result = '<select>'
    list.forEach(item => {
      // let option = item.selected?`<option select>${item.value}</select>`:`<option>${item.value}</select>`;
      // return result += option
      result += `<option ${item.selected?'selected':''}>${item.value}</option>`
    })
    result += '</select>'
    return result
  }
  
  var cityList: CityDropdown[] = [
    {value: '서울시', selected: false},
    {value: '인천시', selected: true},
    {value: '광주시', selected: false},
  ]

  const cityTag = createDropdown(cityList);
  console.log(cityTag);
  
  var ZipcodeList: ZipcodeDropdown[] =[
    {value: 12345, selected:false},
    {value: 34567, selected:false},
    {value: 56789, selected:true},
  ]
  const zipcodeTag = createDropdown(ZipcodeList);
  console.log(zipcodeTag);
  
})();
