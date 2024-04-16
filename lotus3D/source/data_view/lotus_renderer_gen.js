//Copyright 2024 by Lotus.fm LLC

var camera, scene, raycaster, renderer, parentTransform
var mouse = new THREE.Vector2()
var r = 100,
  dot = 0

  var scene = new THREE.Scene()

  var camera = new THREE.PerspectiveCamera(  
    7.7, // This variable controls size -- the lower the value the larger the rendering. Original value was 27.
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  var container = document.getElementById('container')

  containerWidth = window.innerWidth
  containerHeight = window.innerHeight

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.maxPolarAngle = Math.PI / 2
  controls.addEventListener( 'change', () => renderer.render( scene, camera ) );


  var light = new THREE.PointLight(0xffffff)
  light.position.set(-100, 200, 100)
  scene.add(light)

  var group
  group = new THREE.Group()
  group.position.set( 0, -.08, -5);
  group.rotation.set(1,0,0);
  scene.add(group)

  var link_order_length = 0
  var link_order = [] // list of all link values in the module, with k values assigned to each index position
  var k_values = [] // list of all k values generated for corresponding module chart lines
  var active_links = [] //index values of active links
  var active_links2 = [] //index values of active links


//dynamically generated code is inserted here

var time = ' '
var date = ' '

var col_A = ["Women's underwear, nightwear, swimwear, and accessories(2)","Women's suits and separates(2)","Women's outerwear","Women's footwear","Women's dresses","Women's apparel","Women's and girls' apparel","Wireless telephone services(1)(2)","Wine away from home(1)(2)(3)","Wine at home(1)","Window coverings(1)(2)","Window and floor coverings and other linens(2)","White bread(1)(3)","Whiskey at home(1)(3)","Water and sewerage maintenance","Water and sewer and trash collection services(2)","Watches(1)(6)","Video discs and other media(1)(2)(3)","Video and audio services(8)","Video and audio products(8)","Veterinarian services(1)(2)(3)","Vehicle parts and equipment other than tires(1)(3)","Vehicle accessories other than tires(1)(2)","Utility (piped) gas service","Used cars and trucks","Uncooked other beef and veal(1)(2)","Uncooked ground beef(1)","Uncooked beef steaks(2)","Uncooked beef roasts(2)","Tuition, other school fees, and childcare","Transportation services","Transportation commodities less motor fuel(8)","Toys, games, hobbies and playground equipment(2)(3)","Toys","Tools, hardware, outdoor equipment and supplies(1)(2)","Tools, hardware and supplies(2)","Tomatoes","Tobacco products other than cigarettes(1)(2)","Tobacco and smoking products(1)","Tires(1)","Tenants' and household insurance(1)(2)","Televisions","Telephone services(1)(2)","Telephone hardware, calculators, and other consumer information items(1)(2)","Technical and business school tuition and fees(1)(2)","Tax return preparation and other accounting fees(1)(2)(3)","Sugar and sweets(1)","Sugar and sugar substitutes","Subscription and rental of video and video games(1)(2)(3)","Stationery, stationery supplies, gift wrap(3)","State motor vehicle registration and license fees(1)(2)","Sports vehicles including bicycles(1)","Sports equipment(1)","Sporting goods(1)","Spices, seasonings, condiments, sauces","Soups","Snacks","Smartphones(1)(3)(12)","Ship fare(1)(2)(3)","Shelter","Shelf stable fish and seafood(3)","Sewing machines, fabric and supplies(1)(2)","Services less energy services","Services by other medical professionals(1)(6)","Sauces and gravies(2)(3)","Salt and other seasonings and spices(2)(3)","Salad dressing(1)(2)","Roasted coffee(3)","Rice, pasta, cornmeal","Rice(1)(2)(3)","Residential telephone services(1)(8)","Repair of household items(1)(2)","Rent of shelter(13)","Rent of primary residence","Recreational reading materials(1)","Recreational books(1)(2)","Recreation services(8)","Recreation commodities(8)","Recorded music and music subscriptions(1)(2)","Purchase, subscription, and rental of video(1)(2)","Purchase of pets, pet supplies, accessories(1)(2)(3)","Public transportation","Propane, kerosene, and firewood(6)","Professional services","Processed fruits and vegetables(2)","Processed fish and seafood(2)","Prescription drugs(1)","Prepared salads(3)(4)","Poultry(1)","Potatoes","Postage and delivery services(2)","Postage","Pork chops(1)","Pork","Physicians' services(1)","Photographic equipment(2)(3)","Photographic equipment and supplies","Photographers and photo processing(1)(2)","Pets and pet products(1)","Pet services(1)(2)(3)","Pet services including veterinary(1)(2)","Pet food(1)(2)(3)","Personal care services(1)","Personal care products(1)","Peanut butter(1)(2)(3)","Parking fees and tolls(2)(3)","Parking and other fees(1)(2)","Owners' equivalent rent of residences(13)","Owners' equivalent rent of primary residence(13)","Outpatient hospital services(1)(3)(6)","Outdoor equipment and supplies(1)(2)","Other video equipment(2)","Other uncooked poultry including turkey(2)","Other sweets(2)","Other recreational goods(2)","Other recreation services(2)","Other processed fruits and vegetables including dried(2)","Other pork including roasts, steaks, and ribs(2)","Other personal services(1)(8)","Other motor fuels(1)(2)","Other miscellaneous foods(2)","Other meats","Other lodging away from home including hotels and motels","Other linens(2)","Other intercity transportation","Other household equipment and furnishings(2)","Other goods(8)","Other furniture(2)","Other fresh vegetables","Other fresh fruits(2)","Other foods","Other food away from home(1)(2)","Other food at home","Other fats and oils including peanut butter(2)","Other dairy and related products(2)","Other condiments(3)","Other beverage materials including tea(1)(2)","Other bakery products","Other appliances(2)","Oranges, including tangerines(3)","Olives, pickles, relishes(1)(2)(3)","Nursing homes and adult day services(14)","Nonprescription drugs(8)","Nonfrozen noncarbonated juices and drinks(2)","Nonelectric cookware and tableware(2)","Nonalcoholic beverages and beverage materials","Newspapers and magazines(1)(2)","New vehicles","New trucks(3)(10)","New cars(3)","Music instruments and accessories(1)(2)","Moving, storage, freight expense(1)(2)","Motor vehicle repair(1)(2)","Motor vehicle parts and equipment(1)","Motor vehicle maintenance and servicing(1)","Motor vehicle maintenance and repair(1)","Motor vehicle insurance","Motor vehicle fees(1)(2)","Motor vehicle body work(1)","Motor oil, coolant, and fluids(1)(3)","Motor fuel","Miscellaneous personal services(1)","Miscellaneous personal goods(2)","Miscellaneous household products(1)(2)","Milk(2)","Men's underwear, nightwear, swimwear, and accessories","Men's suits, sport coats, and outerwear","Men's shirts and sweaters(2)","Men's pants and shorts","Men's footwear(1)","Men's apparel","Men's and boys' apparel","Medicinal drugs(1)(8)","Medical equipment and supplies(1)(8)","Medical care services","Medical care commodities(1)","Meats, poultry, fish, and eggs","Meats, poultry, and fish","Meats","Margarine(3)","Major appliances(2)","Lunchmeats(1)(2)(3)","Lodging away from home(2)","Living room, kitchen, and dining room furniture(1)(2)","Limited service meals and snacks(1)(2)","Lettuce","Legal services(1)(6)","Leased cars and trucks(1)(11)","Laundry equipment(1)(3)","Laundry and dry cleaning services(1)(2)","Juices and nonalcoholic drinks(2)","Jewelry(6)","Jewelry and watches(6)","Intracity transportation(1)","Intracity mass transit(1)(3)(8)","Internet services and electronic information providers(1)(2)","Instant coffee(1)(3)","Inpatient hospital services(1)(3)(14)","Information technology commodities(8)","Infants' and toddlers' apparel","Indoor plants and flowers(9)","Ice cream and related products","Housing at school, excluding board(13)","Housekeeping supplies(1)","Household paper products(1)(2)","Household operations(1)(2)","Household furnishings and supplies(8)","Household cleaning products(1)(2)","Hospital services(1)(14)","Hospital and related services(1)","Health insurance(1)(5)","Ham, excluding canned(3)","Ham","Haircuts and other personal care services(1)(2)","Hair, dental, shaving, and miscellaneous personal care products(1)(2)","Girls' apparel","Gasoline, unleaded regular(3)","Gasoline, unleaded premium(3)","Gasoline, unleaded midgrade(3)(7)","Gasoline (all types)","Gardening and lawncare services(1)(2)","Garbage and trash collection(1)(10)","Furniture and bedding(1)","Funeral expenses(1)(6)","Full service meals and snacks(1)(2)","Fuel oil and other fuels","Fuel oil","Fruits and vegetables","Frozen vegetables(3)","Frozen noncarbonated juices and drinks(1)(2)","Frozen fruits and vegetables(2)","Frozen fish and seafood(3)","Frozen and refrigerated bakery products, pies, tarts, turnovers(3)","Frozen and freeze dried prepared foods","Fresh whole milk(3)","Fresh whole chicken(1)(3)","Fresh vegetables","Fresh sweetrolls, coffeecakes, doughnuts(1)(3)","Fresh milk other than whole(1)(2)(3)","Fresh fruits and vegetables","Fresh fruits","Fresh fish and seafood(1)(2)","Fresh cakes and cupcakes(1)(3)","Fresh biscuits, rolls, muffins(2)","Fresh and frozen chicken parts(1)(3)","Frankfurters(3)","Footwear","Food from vending machines and mobile vendors(1)(2)","Food away from home(1)","Food at home","Food at employee sites and schools(1)(2)","Food at elementary and secondary schools(1)(3)(5)","Food","Flour and prepared flour mixes","Floor coverings(1)(2)","Fish and seafood","Financial services(1)(6)","Fees for lessons or instructions(1)(6)","Fats and oils","Eyeglasses and eye care(1)(6)","Energy services","Energy commodities","Energy","Elementary and high school tuition and fees","Electricity","Eggs","Educational books and supplies(1)","Education and communication services(8)","Education and communication commodities(8)","Dried beans, peas, and lentils(1)(2)(3)","Domestic services(1)(2)","Distilled spirits, excluding whiskey, at home(1)(3)","Distilled spirits away from home(1)(2)(3)","Distilled spirits at home(1)","Dishes and flatware(1)(2)","Dental services","Delivery services(2)","Day care and preschool(9)","Dairy and related products","Crackers, bread, and cracker products(3)","Cosmetics, perfume, bath, nail preparations and implements(1)","Cookies(1)(3)","Computers, peripherals, and smart home assistants(1)(4)","Computer software and accessories(1)(2)","Commodities less food and energy commodities","College tuition and fees","College textbooks(1)(3)(11)","Coffee","Club membership for shopping clubs, fraternal, or other organizations, or participant sports fees(1)(2)","Clocks, lamps, and decorator items(1)","Citrus fruits(2)","Cigarettes(1)(2)","Chicken(1)(2)","Cheese and related products(1)","Checking account and other bank services(1)(2)(3)","Cereals and cereal products","Cereals and bakery products","Care of invalids and elderly at home(1)(5)","Carbonated drinks","Car and truck rental(2)","Canned vegetables(2)(3)","Canned fruits(2)(3)","Canned fruits and vegetables(2)","Candy and chewing gum(2)","Cakes, cupcakes, and cookies(1)","Cable, satellite, and live streaming television service(10)","Butter(3)","Butter and margarine(2)","Breakfast sausage and related products(2)(3)","Breakfast cereal(1)","Bread(1)(2)","Bread other than white(1)(3)","Boys' apparel","Boys' and girls' footwear(1)","Beverage materials including coffee and tea(2)","Beer, ale, and other malt beverages away from home(1)(2)(3)","Beer, ale, and other malt beverages at home","Beef and veal","Bedroom furniture(1)","Bananas(1)","Bakery products(1)","Bacon, breakfast sausage, and related products(2)","Bacon and related products(3)","Baby food and formula(1)(2)","Audio equipment(1)","Appliances(2)","Apples","Apparel services other than laundry and dry cleaning(1)(2)","Apparel","All items less food and energy","All items","Alcoholic beverages away from home(1)","Alcoholic beverages at home","Alcoholic beverages","Airline fares","Admissions(1)","Admission to sporting events(1)(2)(3)","Admission to movies, theaters, and concerts(1)(2)(3)","nan","nan",]

var label_A = "Expenditure"

var col_B = ["Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Services","Alcohol","Alcohol","Commodities","Commodities","Food","Alcohol","Services","Services","Apparel","Services","Services","Recreation","Services","Transportation","Transportation","Energy","Transportation","Food","Food","Food","Food","Services","Services","Transportation","Recreation","Recreation","Commodities","Commodities","Food","Tobacco","Tobacco","Transportation","Shelter","Recreation","Services","Technology","Services","Services","Food","Food","Services","Commodities","Services","Recreation","Recreation","Recreation","Food","Food","Food","Technology","Services","Shelter","Food","Recreation","nan","Services","Food","Food","Food","Food","Food","Food","Services","Services","Shelter","Shelter","Recreation","Recreation","Services","Recreation","Recreation","Services","Recreation","Services","Energy","Services","Food","Food","Medical care commodities","Food","Food","Food","Services","Services","Food","Food","Services","Recreation","Recreation","Services","Recreation","Services","Services","Recreation","Services","Personal Care","Food","Services","Services","Shelter","Shelter","Services","Commodities","Recreation","Food","Food","Recreation","Services","Food","Food","Services","Energy","Food","Food","Shelter","Commodities","Services","Commodities","nan","Commodities","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Commodities","Food","Food","Services","Medical care commodities","Food","Commodities","Food","Recreation","Transportation","Transportation","Transportation","Recreation","Services","Services","Transportation","Services","Services","Services","Services","Services","Transportation","Energy","Services","Personal Care","Commodities","Food","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Medical care commodities","Medical equipment and supplies","Services","Medical care commodities","Food","Food","Food","Food","Commodities","Food","Shelter","Commodities","Food","Food","Services","Services","Commodities","Services","Food","Apparel","Apparel","Services","Services","Services","Food","Services","Technology","Apparel","Commodities","Food","Shelter","Commodities","Commodities","Services","Commodities","Commodities","Services","Services","Services","Food","Food","Services","Personal Care","Apparel","Energy","Energy","Energy","Energy","Services","Services","Commodities","Services","Food","Energy","Energy","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Apparel","Food","Food","Food","Food","Food","Food","Food","Commodities","Food","Services","Services","Food","Services","Energy","Energy","Energy","Services","Energy","Food","Education","Services","Education","Food","Services","Alcohol","Alcohol","Alcohol","Commodities","Services","Services","Services","Food","Food","Personal Care","Food","Technology","Technology","nan","Services","Education","Food","Services","Commodities","Food","Tobacco","Food","Food","Services","Food","Food","Services","Food","Services","Food","Food","Food","Food","Food","Services","Food","Food","Food","Food","Food","Food","Apparel","Apparel","Food","Alcohol","Alcohol","Food","Commodities","Food","Food","Food","Food","Food","Recreation","Commodities","Food","Services","Apparel","nan","nan","Alcohol","Alcohol","Alcohol","Services","Services","Services","Services","nan","nan",]

var label_B = "Category"

var col_C = ["Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Telecommunication Services","nan","nan","nan","nan","Food at home","nan","nan","nan","Women's apparel","Entertainment Services","Entertainment Services","nan","Pet Services","nan","nan","Energy services","nan","Food at home","Food at home","Food at home","Food at home","Educational Services","Transportation Services","nan","nan","nan","nan","nan","Food at home","nan","nan","nan","nan","nan","Telecommunication Services","nan","Educational Services","Financial Services","Food at home","Food at home","Entertainment Services","nan","Transportation Services","nan","nan","nan","Food at home","Food at home","Food at home","nan","Transportation Services","nan","Food at home","nan","nan","Medical Services","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Telecommunication Services","nan","nan","nan","nan","nan","Entertainment Services","nan","nan","Entertainment Services","nan","Transportation Services","Energy commodities","Medical Services","Food at home","Food at home","nan","Food at home","Food at home","Food at home","nan","nan","Food at home","Food at home","Medical Services","nan","nan","nan","nan","Pet Services","Pet Services","nan","nan","nan","Food at home","Transportation Services","Transportation Services","nan","nan","Medical Services","nan","nan","Food at home","Food at home","nan","nan","Food at home","Food at home","nan","Energy commodities","Food at home","Food at home","nan","nan","Transportation Services","nan","nan","nan","Food at home","Food at home","Food at home","Food away from home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","nan","Food at home","Food at home","Medical Services","nan","Food at home","nan","Food at home","nan","nan","nan","nan","nan","nan","Transportation Services","nan","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","nan","Energy commodities","nan","nan","nan","Food at home","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Women's apparel","Men's and boys' apparel","Men's and boys' apparel","nan","nan","Medical Services","nan","Food at home","Food at home","Food at home","Food at home","nan","Food at home","nan","nan","Food away from home","Food at home","Legal Services","Transportation Services","nan","nan","Food at home","Women's apparel","Women's apparel","Transportation Services","Transportation Services","Telecommunication Services","Food at home","Medical Services","nan","Women's apparel","nan","Food at home","nan","nan","nan","nan","nan","nan","Medical Services","Medical Services","Medical Services","Food at home","Food at home","nan","nan","Women's apparel","Energy commodities","Energy commodities","Energy commodities","Energy commodities","nan","nan","nan","nan","Food away from home","Energy commodities","Energy commodities","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Women's apparel","Food away from home","Food away from home","Food at home","Food away from home","Food away from home","Food at home","Food at home","nan","Food at home","Financial Services","Educational Services","Food at home","Medical Services","Energy services","Energy commodities","nan","Educational Services","Energy services","Food at home","nan","Educational Services","nan","Food at home","nan","nan","nan","nan","nan","Medical Services","nan","Educational Services","Food at home","Food at home","nan","Food at home","nan","nan","nan","Educational Services","nan","Food at home","nan","nan","Food at home","nan","Food at home","Food at home","Financial Services","Food at home","Food at home","Medical Services","Food at home","Transportation Services","Food at home","Food at home","Food at home","Food at home","Food at home","Entertainment Services","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Men's and boys' apparel","Women's apparel","Food at home","nan","nan","Food at home","nan","Food at home","Food at home","Food at home","Food at home","Food at home","nan","nan","Food at home","nan","Men's and boys' apparel","nan","nan","nan","nan","nan","Transportation Services","nan","Educational Services","nan","nan","nan",]

var label_C = "SubCategory"

var col_D = ["1.9","0.7","-1.1","1.4","-1.7","0.5","-1.0","-3.2","4.5","0.9","-0.6","-4.6","3.3","1.6","5.2","5.5","0.8","10.5","5.3","-5.8","9.6","-0.6","-1.8","-17.8","-3.5","5.0","5.5","10.7","6.7","2.7","9.5","-0.8","-3.7","-4.2","-0.8","-0.9","1.8","6.9","7.4","-0.4","4.1","-9.7","-2.1","-10.7","1.7","11.2","4.4","7.2","0.9","-0.1","1.8","-1.0","-1.6","-1.1","4.6","0.6","1.9","-13.2","9.1","6.0","1.9","7.1","5.4","2.1","6.7","3.2","2.0","-1.2","-1.0","-1.8","4.5","18.2","6.1","6.1","0.5","1.1","5.3","-0.6","2.0","2.9","0.5","-4.8","-3.4","1.8","2.5","-1.3","0.4","-0.4","1.7","-0.3","1.2","0.8","3.6","-0.4","0.1","8.4","8.5","4.1","2.9","4.8","7.0","4.8","4.2","3.5","3.6","4.8","3.8","6.2","6.2","8.3","-0.2","-3.3","3.7","2.0","-2.8","4.8","0.4","1.4","6.8","-14.9","1.8","1.4","0.6","-9.4","-3.4","-2.0","4.4","-2.7","1.1","7.4","2.4","6.7","2.6","5.1","0.0","4.1","3.1","2.8","-1.9","0.3","2.5","5.0","9.2","4.2","-7.6","3.4","0.0","0.7","0.8","0.3","3.0","-4.9","7.9","-0.8","5.7","6.5","20.6","2.6","4.3","-2.7","-6.6","8.7","-1.9","0.3","-2.4","2.2","-5.3","4.4","3.3","-0.3","1.9","1.7","3.0","3.4","0.6","3.0","-0.9","2.1","3.5","-2.0","-7.3","1.3","1.0","-4.4","5.8","-11.7","nan","-1.6","-12.4","5.4","4.8","0.6","0.6","1.7","2.1","3.8","-2.3","5.9","-6.9","-1.7","3.0","0.2","3.9","1.8","3.8","nan","-1.3","3.0","6.7","6.5","-23.3","-3.6","-3.0","4.2","6.2","-9.0","-6.9","-2.9","-4.2","-6.4","nan","6.4","-2.9","4.7","4.3","-10.5","-14.2","1.1","5.0","29.0","3.8","-1.2","0.9","1.1","-3.1","3.7","-0.9","2.6","-1.8","0.6","1.9","-3.9","1.7","2.9","0.4","7.1","0.0","10.6","5.1","1.2","3.1","2.1","2.6","1.0","0.5","-2.6","8.3","6.2","1.9","2.7","-2.0","-6.9","-4.6","4.9","3.8","-28.6","-4.0","1.3","-6.6","-2.3","nan","-0.8","4.7","-0.2","-4.4","4.8","3.6","4.7","-1.1","5.1","0.5","0.6","-2.1","-8.6","-0.3","1.3","-5.7","-1.4","3.1","-2.1","1.2","7.5","1.2","-2.1","4.4","-0.6","1.5","6.7","4.8","-14.1","2.6","2.2","2.5","4.7","1.0","5.7","-1.6","-2.3","-3.4","-0.8","3.2","2.8","1.0","-1.6","0.2","4.0","2.4","7.7","-0.9","-2.0","2.5","-1.3","0.6","8.7","-6.6","-3.9","-8.9","5.6","0.1","3.9","3.1","4.0","1.2","2.3","-6.4","7.0","13.5","5.2","nan","nan",]

var label_D = "Previous Year"

var col_E = ["3.0","1.0","-2.8","0.0","-5.6","0.5","0.1","-0.3","0.4","0.7","-0.4","1.8","0.5","0.7","1.7","1.4","2.5","0.6","0.6","2.1","-0.1","1.6","0.5","1.6","-3.7","0.3","-1.3","0.6","-0.7","0.2","0.7","-1.1","0.7","0.8","-0.7","-1.3","5.0","-0.7","0.3","0.8","0.7","2.1","0.0","0.0","0.0","nan","1.0","2.2","-0.3","0.1","0.6","2.8","0.6","2.0","2.5","1.2","-0.1","0.2","2.1","0.6","-3.8","-1.8","0.7","0.6","2.0","2.6","-0.1","2.4","0.4","-0.6","1.4","nan","0.6","0.3","-0.2","1.3","0.5","1.1","2.0","0.8","0.7","0.9","2.1","0.5","0.6","-1.7","-0.8","-0.2","0.3","4.4","2.0","1.5","0.4","-0.3","0.6","2.2","2.3","0.7","0.1","5.6","0.9","-0.1","0.7","0.5","0.0","1.8","1.9","0.5","0.5","2.0","-0.3","1.6","2.6","0.3","0.5","0.4","1.1","-0.4","1.0","-3.9","-0.3","-0.3","5.2","3.3","-1.5","0.6","0.6","1.5","3.0","1.7","0.3","0.2","0.5","0.8","1.6","9.6","-0.1","0.1","2.8","-1.2","-0.7","2.0","0.0","1.8","0.9","2.2","-1.6","0.2","0.2","0.3","-0.4","-1.0","0.5","0.7","1.0","0.8","1.8","1.1","0.7","-1.3","-1.6","1.2","2.0","0.5","-0.8","4.4","4.3","2.2","9.5","0.0","4.9","4.3","-0.5","-1.4","1.0","-0.6","-0.1","-0.3","-0.3","1.0","3.3","-0.8","4.3","1.3","0.6","-1.7","nan","nan","3.0","0.7","2.4","6.7","6.0","-1.0","-0.4","1.2","1.8","1.5","0.8","0.2","0.7","-1.2","0.1","0.4","0.1","nan","0.7","0.5","1.6","1.6","1.4","-0.8","-0.5","0.7","0.7","-2.8","-1.5","-1.7","-1.5","-1.5","nan","0.8","1.3","0.4","0.4","0.7","-0.6","1.3","1.3","9.9","0.5","0.3","0.2","-0.7","-1.0","0.5","2.9","-0.7","-0.9","1.5","0.3","0.1","-1.0","0.2","-0.6","0.9","0.0","-0.5","0.5","0.7","-0.1","0.0","0.6","2.7","1.0","-0.8","2.4","0.7","1.1","0.0","2.5","-1.5","0.4","0.0","2.8","1.8","-0.8","0.4","0.6","0.0","nan","-0.6","-0.1","0.0","0.7","0.4","4.7","0.8","0.4","0.0","0.3","0.3","1.9","2.0","0.2","0.0","-1.1","2.5","0.7","0.5","-0.8","0.5","-0.2","1.0","0.0","0.3","0.2","1.6","3.0","-6.8","1.9","-1.2","0.5","1.0","0.1","0.6","3.6","2.4","2.1","-0.8","0.3","0.0","2.3","0.1","1.5","-0.1","0.7","-0.3","1.3","-1.5","0.1","-0.4","-2.1","0.7","2.6","2.9","-0.5","1.5","1.7","0.6","0.5","0.0","0.5","0.3","1.7","-0.3","-0.9","0.4","nan","nan",]

var label_E = "Previous Month"

var rowcount = 340

var filter1 = col_D

var filter2 = col_E

//end dynamic values populated by Python generator script


  var percent_change = []
  var xmlhttp = new XMLHttpRequest()


// -------------------------------------------- //


init()
function init () {
  container = document.createElement('div')
  document.body.appendChild(container)


function calc_percent ()   //use this function if you need to show percent changes for any of the column values

{
  for (var i = 0; i < 2000; i++) { //convert change dollar values into percent
      var quote_change = col_C[i];
      var current_price =col_B[i];
      quote_change = (quote_change/(current_price-quote_change))*100
      quote_change = quote_change.toFixed(2);
      percent_change.push([quote_change]);
    }
}

//calc_percent();


function assignLinks () //this assigns k values to the ranked link ids, so that the highest values occur at the highest chart points for each concentric ring.

  {
  var interval = 50;

  for (var i = 0; i < 12; i++) { //link ids for the innermost petal ring
    k = (i * interval )+ 25;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = 0; j < 12; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }

  var link_order_length = link_order.length;
  var stop= link_order_length + 14

  for (var i = 0; i < 14; i++) {  //link ids for the middle petal ring
    k = (i * interval )+ 25;
    k = k + 600;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = link_order_length; j < stop; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }

  var link_order_length = link_order.length;
  var stop= link_order_length + 16

  for (var i = 0; i < 16; i++) {  //link ids for the outer petal ring
    k = (i * interval )+ 25;
     k = k + 1300;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = link_order_length; j < stop; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }


}

assignLinks();


//console.log(link_order)


//Petal Constructor - draws outline of petal
function drawPetal (
    x,
    y,
    z,
    x0,
    y0,
    z0,
    x1,
    y1,
    z1,
    petalheight,
    ctrlpt,
    color_code,
  ) {
    var curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0 + petalheight, z0)
    )

    var points = curve.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var curve2 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x0, y0 + petalheight, z0),
      new THREE.Vector3(x1, ctrlpt, z1),
      new THREE.Vector3(x1, y1, z1)
    )

    var points = curve2.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })

    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)
  }


  //Chart Position Arc - returns points for top of chart lines
  function chartTop (
    x,
    y,
    z,
    x0,
    y0,
    z0,
    x1,
    y1,
    z1,
    petalheight,
    ctrlpt,
    color_code
  ) {
    var curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0 + petalheight, z0)
    )

    var points1 = curve.getSpacedPoints(25)
    var geometry = new THREE.BufferGeometry().setFromPoints(points1)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var curve2 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x0, y0 + petalheight, z0),
      new THREE.Vector3(x1, ctrlpt, z1),
      new THREE.Vector3(x1, y1, z1)
    )

    var points2 = curve2.getSpacedPoints(25)
    var geometry = new THREE.BufferGeometry().setFromPoints(points2)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var points = points1.concat(points2)
    return points
  }


  //Chart Position - draws chart lines within petal arc
  function chartPosition (x, y, z, x0, y0, z0, petalheight, ctrlpt, color_code) {
    var cPcurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var points = cPcurve.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)
  }


//Invisible Spaghetti - add TubeGeometry objects that sheath chart lines representing active geometric links.
function invisibleSpaghetti (k, x, y, z, x0, y0, z0, petalheight, ctrlpt) {
    var link_curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var geometry = new THREE.TubeGeometry(link_curve, 8, 0.002, 4, false)  //previous values: 64, 0.004, 8,
    var material = new THREE.MeshBasicMaterial()
    var object = new THREE.Mesh(geometry, material)
    material.transparent = true
    material.opacity = 0
    object.label = k
    parentTransform.add(object)
  }

//Visible Spaghetti - visible TubeGeometry objects represent highlighted links.
function visibleSpaghetti (k, x, y, z, x0, y0, z0, petalheight, ctrlpt, color_code) {
    var link_curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var geometry = new THREE.TubeGeometry(link_curve, 16, 0.004, 4, false)  //previous values: 32, 0.004, 4,
    var material = new THREE.MeshBasicMaterial({ color: color_code })
    var object = new THREE.Mesh(geometry, material)
    material.transparent = true
    material.opacity = .7
    object.label = k
    parentTransform.add(object)
  }

//Draw Petals - draws ring of lotus petals
function drawPetalRing (segmentCount, radius, depth, color_code, chartLines, divisor){
  var geometry = new THREE.Geometry(),
  material = new THREE.LineBasicMaterial({ color: color_code })

  for (var i = 0; i <= segmentCount; i++) {
    var theta = (i / segmentCount) * Math.PI * 2
    var iota = ((i + 0.5) / segmentCount) * Math.PI * 2
    var kappa = ((i + 1) / segmentCount) * Math.PI * 2
    drawPetal(
      Math.cos(theta) * radius,
      0,
      Math.sin(theta) * radius,
      Math.cos(iota) * (radius - depth),
      0,
      Math.sin(iota) * (radius - depth),
      Math.cos(kappa) * radius,
      0,
      Math.sin(kappa) * radius,
      0.5,
      0.45,
      color_code
    )
  }
  group.add(new THREE.Line(geometry, material))


  //Draws Chart Lines 
  var geometry = new THREE.Geometry(),
    material = new THREE.LineBasicMaterial({ color: color_code })

  for (var i = 0; i < chartLines; i++) {
    var k = 0
    var theta = (i / chartLines) * Math.PI * 2
    var iota = ((i + 0.5) / chartLines) * Math.PI * 2
    var kappa = ((i + 1) / chartLines) * Math.PI * 2
    var iota0 = ((i + divisor / 2) / chartLines) * Math.PI * 2
    var kappa0 = ((i + divisor) / chartLines) * Math.PI * 2
    var modulus = i % divisor

    var base_x = Math.cos(theta) * radius
    var base_y = 0
    var base_z = Math.sin(theta) * radius
    var petalheight = 0.5
    var ctrlpt = 0 //ctrl pt for chart lines (within petal)
    var arcpt = 0.45 //ctrl pt for petal arc (outline)

    if (modulus == 0) {

//this resets chart line variables for each new petal drawn

      var chartPoint = chartTop(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius,
        Math.cos(iota0) * (radius - depth),
        0,
        Math.sin(iota0) * (radius - depth),
        Math.cos(kappa0) * radius,
        base_y,
        Math.sin(kappa0) * radius,
        petalheight,
        arcpt,
        0x00769d
      )

      for (var j = 1; j <= divisor; j++) {
        k = i + j
        k=k-1
        var theta0 = (k / chartLines) * Math.PI * 2
        var base_xk = Math.cos(theta0) * radius
        var base_yk = 0
        var base_zk = Math.sin(theta0) * radius
        if (chartLines==600) {  //this ensures that each k value is unique within the lotus flower
          k=k;
          }
        if (chartLines==700) {
          k=k+600;
          }
        if (chartLines==800) {
          k=k+1300;
          }
        

        chartPosition(
          chartPoint[j].x,
          chartPoint[j].y,
          chartPoint[j].z,
          base_xk,
          base_yk,
          base_zk,
          petalheight,
          ctrlpt,
          color_code
        )

        k_values.push([    //k values each define a unique curve in 3D space. They are not associated with a specific petal ring.
          k,
          chartPoint[j].x,
          chartPoint[j].y,
          chartPoint[j].z,
          base_xk,
          base_yk,
          base_zk,
          petalheight,
          ctrlpt,
        ])
      }
    }


    geometry.vertices.push(
      new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
    )
  }

  parentTransform = new THREE.Object3D()
  group.add(parentTransform)
  group.add(new THREE.Line(geometry, material));

}


  // -------------------------------- // 



drawPetalRing (12, .65, .1, 0x00769d, 600, 50) //center petals

drawPetalRing (14, .85, .1, 0x0289b6, 700, 50)  //middle petals

drawPetalRing (16, 1, 0,  0x0099cc, 800, 50)  //outer petals

getActiveLinks();
addLinks();
render();

document.getElementById('nowplaying').innerHTML =
      '<br><br><br><br><br>'

function getActiveLinks()  //sorts for a given set of values from the data obtained above
{

    var f = filter1.entries();
    var g = filter2.entries();

    for (x of f) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > 5) {  // trend can also be specified as a variable in index.html [uptrend]
        
        active_links.push(change_index);
        console.log(change_index);
        console.log(change_value);
      }
    }

      /*else if (change_value < 0) {  // trend can also be specified as a variable in index.html [downtrend]
        change_index = quote[0]
        active_links2.push(change_index);
      }

    for (x of g) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > 5) {  // trend can also be specified as a variable in index.html [uptrend]
        
        active_links2.push(change_index);
      }
       
      
    }*/
}

/*function getActiveLinks()  // how we do this for percent values
{

    var f = percent_change.entries();

    for (x of f) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > uptrend) {  // specified in index.html
        
        active_links.push(change_index);
      }

      else if (change_value < downtrend) {  // specified in index.html
        change_index = quote[0]
        active_links2.push(change_index);
      }
    }
}*/

console.log (active_links.length)
console.log (active_links2.length)

function addLinks() {  //adds links for selected values

  link_order_length = link_order.length
//  console.log(link_order_length)

for (i = 0; i < link_order_length; i++) {

    if (active_links.includes(i)) {

      var k = link_order[i];
      var color_code = 0xbd4840; 

      visibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )
    }

    if (active_links2.includes(i)) {

      var k = link_order[i];
      var color_code = 0xbd4840;

      visibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )
    }

    else

    var k = link_order[i];       

        invisibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )

  }
}


  // -- quote details code

  function showPointer () {
    document.body.style.cursor = 'pointer'
  }

  function nowPlaying (k) {
      l = link_order.indexOf(k)

      //Recommended format for numbers greater than 1,000
      //volume = col_G[l]    
      //volume = (new Intl.NumberFormat().format(volume));


      if (col_A[l] == undefined)
      {
        document.getElementById('nowplaying').innerHTML =''
      }

      else

         document.getElementById('nowplaying').innerHTML =
      '<br><br><b>' + label_A +'</b>: ' + col_A[l] + '&nbsp; &nbsp;'  
      + '<br><b>' + label_B + '</b>: ' + ' ' + col_B[l] + '&nbsp; &nbsp;'
      + '<br><b>' + label_C + '</b>: ' + col_C[l] + ' '
      //+ '<br><b>' + label_G + ':</b> ' + '$' + col_G[l] + '&nbsp; &nbsp;'
      + '<b>' + label_D + ':</b> ' + ' ' + col_D[l] + ' %'  + '&nbsp; &nbsp;' +  
      '<br><b>' + label_E + ':</b> ' + col_E[l] + ' %' +'&nbsp; &nbsp;' + '<b>' //+ label_F + ':</b> ' + '$'  + col_F[l] 
            }

 function datestamp (date,time) {
  document.getElementById('datestamp').innerHTML =
      '<span style = "color:#bd4840; font-weight:bold; font-size: 16px;">Previous Year</span>&nbsp; '+ active_links.length + ' Item<br> categories showed price increases of 5% or more.' 
     //+ '<span style = "color:#963636; font-weight:bold; font-size: 16px;">Previous Month </span>&nbsp; '+ active_links2.length + ' links<br>' //+
      //time + " &nbsp;" + date
      }


datestamp(date,time);


  // --- raycaster code

  raycaster = new THREE.Raycaster()

  document.addEventListener('mousemove', onDocumentMouseMove, false)
  window.addEventListener('click', onMouseClick, false)
  window.addEventListener('resize', onWindowResize, false)
  
  function onDocumentMouseMove (event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)

    var intersects = raycaster.intersectObjects(parentTransform.children, true)
    
    if (intersects.length > 0) {
      showPointer()
    }
    else {
      document.body.style.cursor = 'default'
      document.getElementById('nowplaying').innerHTML =
      '<br><br>'
    }

    for (var i = 0; i < intersects.length; i++) {
      var intersection = intersects[i],
      obj = intersection.object
      k = obj.label
      l = link_order.indexOf(k)   //connects the k value -- position on lotus petal graph -- to ID for link value
      nowPlaying(k)

    }
  }


  function onMouseClick (event) {
    //event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    var intersects = raycaster.intersectObjects(parentTransform.children, true)
    for (var i = 0; i < intersects.length; i++) {
      var intersection = intersects[i],
      obj = intersection.object
      k = obj.label
      l = link_order.indexOf(k)   //connects the k value -- position on lotus petal graph -- to ID for link value
      //var URL = "https://www.bls.gov/news.release/cpi.t02.htm" + col_A[l]
      //window.open(URL, '_blank')
    }
  }

  function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  //animate and render

  camera.position.z = 5

  function animate () {
    requestAnimationFrame(animate)
    group.rotation.x += 0.0
    group.rotation.y += 0.0
  }
  animate()
  render()

  function render () {
    dot += 0
    renderer.render(scene, camera)
    renderer.setClearColor(0xffffff, 1)
  }
}

//  ---- reference code ----- //  


//  ---- reference code ----- //  