import produce from 'immer'

let initialState={

  SchoolName:"Lomdim",
  AllTeachers:[
      {id:01, teacherName:'aaaaaa' },
      {id:02, teacherName:'bbbbbb' },
      {id:03, teacherName:'cccccc'},
      {id:04, teacherName:'ddddd'},

  ],
  currentUser:{},//   ןנרשם משתמש שכרגע נכנס למערכת
  AllUsers:[
      {id:1,name:'michal'},
      {id:2,name:'rachel'},

  ],
  
   
   
  
  shopBag:{}
}
  //הסטייט מכיל את השינויים
  const reducer=produce((state,action)=>{

  
  switch(action.type){
      case 'UPDATE_SHOP_NAME':
          {state.ShopName=action.payLoad}
          break;
      case 'ADD_USER':
          {}

          
          }
  }
  ) 