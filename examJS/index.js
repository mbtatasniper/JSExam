$('.open').click(function () {
    if ($('nav').css('left') == 0 + 'px') {
        $('nav').animate({ 'left': '-250px' }, 500)
        $('.open').animate({ 'left': '0px' }, 500)
    }
    else {
        $('nav').animate({ 'left': '0px' }, 500)
        $('.open').animate({ 'left': '250px' }, 500)
    }

})

res1 = [];
res2 = [];
res3 = [];
res4 = [];
res5 = [];
res6 = [];
res7 = [];
res8 = [];
res9 = [];



async function getMeals() {

    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    res1 = await url.json()
    displayMeals()

}
async function getAreas() {

    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    res2 = await url.json()
    displayAreas()

}
async function getIngredients() {

    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    res3 = await url.json()
    displayIngredients()

}

async function getMealsByName(name) {

    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    res4 = await url.json()

    displayMealsByName()
}
async function getMealsByLetter(a) {

    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${a}`)
    res4 = await url.json()

    displayMealsByLetter()
}
async function getCategoryOfMeals(a) {


    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${a}`)
    res6 = await url.json()


    displayCategoryOfMeals()
}
async function getAreaOfMeal(a) {
    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`)
    res8 = await url.json()
    displayAreaOfMeal()
}
async function getIngredientOfMeal(a) {
    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${a}`)
    res9 = await url.json()
    displayIngredientOfMeal()
}
async function getMealById(a) {


    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${a}`)
    res7 = await url.json()

    displayMealById()
}

function displayMeals() {
    box = ''
    for (let i = 0; i < res1.categories.length; i++) {

        box += `
        
        <div class="col-lg-3 " onClick=getCategoryOfMeals("${res1.categories[i].strCategory}")>
        <div id='oo${i}' class="zz" >
        <h4>${res1.categories[i].strCategory} </h4>
        <img src="${res1.categories[i].strCategoryThumb}" class='w-100'>
        <p>${res1.categories[i].strCategoryDescription.split(' ').slice(0, 10).join(' ')}</p>
        </div>
        </div>
      `
    }
    row1.innerHTML = box;

}
function displayAreas() {
    box = ''
    console.log(res2);
    for (let i = 0; i < res2.meals.length; i++) {

        box += `
        
        <div class="col-lg-3 " onClick=getAreaOfMeal('${res2.meals[i].strArea}')>
        <div id='oo${i}' class="zz" >
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h4>${res2.meals[i].strArea} </h4>
        </div>
        </div>
      `
    }
    row1.innerHTML = box;

}
function displayIngredients() {
    box = ''

    for (let i = 0; i <= 20; i++) {

        box += `
        
        <div class="col-lg-3 " onClick=getIngredientOfMeal("${res3.meals[i].strIngredient}")>
        <div id='oo${i}' class="zz" >
        <h4>${res3.meals[i].strIngredient} </h4>
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <p>${res3.meals[i].strDescription.split(' ').slice(0, 10).join(' ')}</p>
        </div>
        </div>
      `
    }
    row1.innerHTML = box;

}
function displayMealsByName() {
    box = ''

    for (let i = 0; i < (res4.meals == null ? 0 : res4.meals.length); i++) {

        box += `
        <div class="col-lg-3 ">
        <h4>${res4.meals[i].strMeal} </h4>
        <p><img src="${res4.meals[i].strMealThumb}" class='w-100' alt=""></p>
        </div> 
      `
    }
    row2.innerHTML = box;
}
function displayMealsByLetter() {
    box = ''

    for (let i = 0; i < (res4.meals == null ? 0 : res4.meals.length); i++) {

        box += `
        <div class="col-lg-3 ">
        <h4>${res4.meals[i].strMeal} </h4>
        <p><img src="${res4.meals[i].strMealThumb}" class='w-100' alt=""></p>
        </div> 
      `
    }
    row2.innerHTML = box;
}
function displayCategoryOfMeals() {
    box = ''

    for (let i = 0; i < (res6.meals == null ? 0 : res6.meals.length); i++) {

        box += `
        <div class="col-lg-3 " onClick=getMealById(${res6.meals[i].idMeal})>
        <h4>${res6.meals[i].strMeal} </h4>
        <p><img src="${res6.meals[i].strMealThumb}" class='w-100' alt=""></p>
        </div> 
      `
    }
    row1.innerHTML = box;
}
function displayAreaOfMeal() {
    box = ''
    console.log(res8);
    for (let i = 0; i < (res8.meals == null ? 0 : res8.meals.length); i++) {

        box += `
        <div class="col-lg-3 "  onClick=getMealById(${res8.meals[i].idMeal})>
        <h4>${res8.meals[i].strMeal} </h4>
        <p><img src="${res8.meals[i].strMealThumb}" class='w-100' alt=""></p>
        </div> 
      `
    }
    row1.innerHTML = box;
}
function displayIngredientOfMeal() {
    box = ''
    console.log(res9);
    for (let i = 0; i < (res9.meals == null ? 0 : res9.meals.length); i++) {

        box += `
        <div class="col-lg-3 "  onClick=getMealById(${res9.meals[i].idMeal})>
        <h4>${res9.meals[i].strMeal} </h4>
        <p><img src="${res9.meals[i].strMealThumb}" class='w-100' alt=""></p>
        </div> 
      `
    }
    row1.innerHTML = box;
}
function displayMealById() {
    box = ''
    console.log(res7);
    for (let i = 0; i < (res7.meals == null ? 0 : res7.meals.length); i++) {

        box += `
        <div class="col-lg-6">
        <p><img src="${res7.meals[i].strMealThumb}" class='w-100' alt=""></p>
        <h4>${res7.meals[i].strMeal} </h4>
        </div>
        <div class="col-lg-6">
        <p>Instructions</p>
        <p>${res7.meals[i].strInstructions}</P>
        <P>Area:${res7.meals[i].strArea}</P>
        <P>Category:${res7.meals[i].strCategory}</P>
        <p>Recipes: ${res7.meals[i].strMeasure1} ${res7.meals[i].strIngredient1} ${res7.meals[i].strMeasure2}  ${res7.meals[i].strIngredient2} ${res7.meals[i].strMeasure3}  ${res7.meals[i].strIngredient3}</p>
        <P>Tags:${res7.meals[i].strTags}</P>
        <button class="btn btn-success"><a href="${res7.meals[i].strSource}"></a>Source</button>
        <button class="btn btn-danger"><a href="${res7.meals[i].strYoutube}"></a>Youtube</button>
        </div>
      `
    }
    row1.innerHTML = box;
}

getMeals()

$('#cc').click(function () {
    getMeals()
}
)
$('#aa').click(function () {
    getAreas()
}
)
$('#ii').click(function () {
    getIngredients()
}
)

function displaySearch() {
    row1.innerHTML = `
    <div class="col-md-12 ">
          <input type="text" class="form-control" id="aaa" placeholder="Search By Name">
          <input type="text" class="form-control" id='bbb' placeholder="Search By First letter" maxlength="1">
          
      </div>
      <div  class='container'>
      <div class='row' id='row2'>
      
      
       </div>
      </div>
    `
    $('#aaa').on('input', function (e) {
        getMealsByName(e.target.value)
    })
    $('#bbb').on('input', function (e) {
        getMealsByLetter(e.target.value)
    })
}

$('#ss').click(function () {
    displaySearch()
})

function displayContacts() {
    row1.innerHTML = `
    <div class="col-md-6 ">
    <input type="text" class="form-control" id="r1" placeholder="Enter Your Name">
    <p id="s1" class="d-none">Special characters and numbers not allowed</p>
    <input type="text" class="form-control" id="r2" placeholder="Enter Your Email">
    <p id="s2" class="d-none">Email not valid *exemple@yyy.zzz </p>
    <input type="text" class="form-control" id="r3" placeholder="Enter Your phone">
    <p id="s3" class="d-none"> Enter valid Phone Number </p>
  </div>
  <div class="col-md-6 ">
    <input type="text" class="form-control" id="r4" placeholder="Enter Your age">
    <p id="s4" class="d-none">Enter valid age </p>
    <input type="text" class="form-control" id="r5" placeholder="Enter Your password">
    <p id="s5" class="d-none">Enter valid password *Minimum eight characters, at least one letter and one number:* </p>
    <input type="text" class="form-control" id="r6" placeholder="Enter Your repassword">
    <p id="s6" class="d-none">Enter valid repassword </p>
    <button class="btn btn-outline-danger" id='b1' disabled>Submit</button>
  </div>
    `
    regexr1=/^[a-zA-Z]+$/
    $('#r1').on('input', function (e) {
        if (validate(regexr1, e.target.value)) {
            s1.classList.replace('text-danger', 'd-none')
        } else {
            s1.classList.replace('d-none', 'text-danger')
        }
    })
    regexr2=/^[a-zA-Z]+@[a-zA-Z]+mail.com$/
    $('#r2').on('input', function (e) {
        if (validate(regexr2, e.target.value)) {
            s2.classList.replace('text-danger', 'd-none')
        } else {
            s2.classList.replace('d-none', 'text-danger')
        }
    })
    regexr3=/^[0-9]{10,12}$/
    $('#r3').on('input', function (e) {
        if (validate(regexr3, e.target.value)) {
            s3.classList.replace('text-danger', 'd-none')
        } else {
            s3.classList.replace('d-none', 'text-danger')
        }
    })
    regexr4=/^[0-9][0-9]?$/
    $('#r4').on('input', function (e) {
        if (validate(regexr4, e.target.value)) {
            s4.classList.replace('text-danger', 'd-none')
        } else {
            s4.classList.replace('d-none', 'text-danger')
        }
    })
    regexr5=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    $('#r5').on('input', function (e) {
        if (validate(regexr5, e.target.value)) {
            s5.classList.replace('text-danger', 'd-none')
        } else {
            s5.classList.replace('d-none', 'text-danger')
        }
    })
    
    $('#r6').on('input', function (e) {
        
        if (r6.value==r5.value) {
             
            s6.classList.replace('text-danger', 'd-none')
        } else {
            s6.classList.replace('d-none', 'text-danger')
        }
        if(validate(regexr1,r1.value)&&validate(regexr2,r2.value)&&validate(regexr3,r3.value)&&validate(regexr4,r4.value)&&validate(regexr5,r5.value)&&(r6.value==r5.value)){
            $('#b1').removeAttr('disabled')
        }else{
            $('#b1').attr('disabled')
        }
    })
 
    
}

$('#oo').click(function () {
    displayContacts()
})



function validate(regex,ele){
    if(regex.test(ele)){
        return true
    }
    else{
        return false
    }
}




