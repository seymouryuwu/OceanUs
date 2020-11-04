# OceanUs

Project Structure

    oceanusproject
        |--src
            |--main
                |--java
                    |--oceanusproject.demov1
                        |--controller
                            |--ArticleController
                            |--ConstraintViolationExceptionHandler
                            |--DCVFileController
                            |--GameController
                            |--ImageController
                            |--PageController
                            |--ProfileController
                            |--QuizController
                        |--dto
                            |--AchievementDTO
                            |--AnswerDTO
                            |--ArticleDTO
                            |--GameResultDTO
                            |--GameUnlockStateDTO
                            |--NicknameDTO
                            |--QuizDTO
                            |--QuizOptionDTO
                            |--QuizResultDTO
                            |--ScoreDTO
                            |--SectionDTO
                            |--SectionQuizDTO
                            |--UserDTO
                            |--UserProfileDTO                           
                        |--erro
                            |--UserAlreadyExistException
                        |--model
                            |--Achievement
                            |--AchievementRecord
                            |--Article
                            |--Game
                            |--GeneralUser
                            |--Quiz
                            |--QuizOption
                            |--QuizSectionArticle
                            |--Section
                            |--UserArticleRecord
                            |--UserGameRecord
                            |--UserQuizArticle
                            |--UserQuizRecord
                        |--repository
                            |--AchievementRepository
                            |--AchievementRecordRepository
                            |--ArticleRepository
                            |--GameRepository
                            |--UserRepository
                            |--QuizRepository
                            |--QuizOptionRepository
                            |--QuizSectionArticleRepository
                            |--SectionRepository
                            |--UserArticleRecordRepository
                            |--UserGameRecordRepository
                            |--UserQuizArticleRepository
                            |--UserQuizRecordRepository             
                        |--security
                            |--SecurityConfig
                        |--service
                            |--AchievementService
                            |--ArticleService
                            |--GameService
                            |--QuizService
                            |--UserDetailsImpl
                            |--UserDetailsServiceImpl
                            |--UserService
                        |--validation
                            |--PasswordConstraintValidator
                            |--PasswordMatches
                            |--PasswordMatchesValidator
                            |--UsernameConstraintValidator
                            |--ValidPassword
                            |--ValidUsername
                        |--Demov1Application
                |--resources
                    |--static
                        |--css
                            |--adventurequiz.css
                            |--cloggedmemory.css
                            |--ending.css
                            |--explore.css
                            |--games.css
                            |--index.css
                            |--login.css
                            |--normalize.css
                            |--ourstory.css
                            |--profile.css
                            |--sharkvsrubbish.css
                            |--signup.css
                            |--style.css
                            |--suziestoosies.css
                        |--DCVFile
                        |--fonts
                        |--images
                        |--js
                            |--adventurequiz.js
                            |--cloggedmemory.js
                            |--EggShell.js
                            |--ending.js
                            |--explore.js
                            |--Fish.js
                            |--games.js
                            |--index.js
                            |--Medicine.js
                            |--MilkBox.js
                            |--OilBottle.js
                            |--phaser.min.js
                            |--Player.js
                            |--proflie.js
                            |--SceneBootGame.js
                            |--SceneGameOver.js
                            |--SceneInstruction.js
                            |--SceneMain.js
                            |--ScenePlayGame.js
                            |--SharkGame.js
                            |--suziestoosies.js
                            |--template.js
                            |--ToiletPaper.js
                    |--templates
                        |--adventurequiz.html
                        |--cloggedmemory.html
                        |--ending.html
                        |--explore.html
                        |--games.html
                        |--index.html
                        |--login.html
                        |--ourstory.html
                        |--profile.html
                        |--sharkvsrubbish.html
                        |--signup.html
                        |--suziestoosies.html
                    |--application.properties
                    |--data.sql
                    |--mykeystore.jks
            |--test
        |--target
            |--demov1-0.0.1-SNAPSHOT.jar
        |--pom.xml
    
Package controller

    Controller contains all the APIs required by frontend, including RESTful APIs and View APIs.
    
    Except PageController, the other controllers are RESTful APIs.
    
Package dto

    Dto contains all the data transfer objects that are used when frontend and backend transfer data.
    
Package error

    Error contanis a custom exception which will be thrown when the username already exist when user register.
   
Package model

    Model contains all the JPA entities including tables and views in database.
    
    QuizSectionArticle and UserQuizArticle are views, the others are table.
    
Package repository

    Repository defines all the operaitons to the JPA entities.
    
    All the repository extend JpaRepository.

Package security

    Security contains the configuration of the security features for this appication.
    
    Here the HTTPS is validated, password will be encoded before store into database, 
    as well as the form-based authentication for the users
Package service
    
    Service contains all the business logic and services.
    
Package validation

    Validation contains the validations for username, password and confirm password.

Modifying Pages

	The general frontend structure is set up modular fashion with all the HTML, JS, CSS and image files place in folders based on file type.

	The layout is created using bootstrap framework.

	BOOTSTRAP JS FILES (Accessed by Stackpath CDN) :
	https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js

	BOOTSTRAP CSS FILES (Accessed by Stackpath CDN) :
	https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css

	HTML 
	
		FOLDER : resources/templates/
	
	CSS
		
		○ To add/modify general styles common across all pages refer to the style.css page
		○ To add/modify an individual page's styles refer to the CSS file with the same name as the HTML file
	
		FOLDER : resources/static/css/
	
	JavaScript (jQuery based)
		
		○ To add/modify the header and footer refer template.js
		○ To add/modify an individual page's styles refer to the JS file with the same name as the HTML file
		○ Shark vs Rubbish comprises of several JS file and must be edited using the phaser.js framework
		
		FOLDER : resources/static/js/
	
	Images
	
		FOLDER : resources/static/images/
	
  
Modifying the Games

	Shark vs Rubbish (Phaser.js)
	
		Shark vs rubbish was built using the phaser.js framework. 
		
		PHASER JS FRAMEWORK FILES : 
		Phaser.min.js
	           
		GAME JS FILES :  
		EggShell.js, Fish.js, Medicine.js, MilkBox.js, OilBottle.js,  Player.js, SceneBootGame.js, SceneGameOver.js, SceneInstructions.js, SceneMain.js, ScenePlayGame.js, ToiletPaper.js
		
		NOTE: 
		SharkGame.js is used to style the page layout around the game.
		
	
	Suzies Toosies (jQuery)
	
		Suzies Toosies was built using the jQuery framework.
		
		JQUERY FRAMEWORK FILES (Accessed by Google CDN) :
		https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
		
		GAME JS FILES : 
		suziestoosie.js
		
		GAME CSS FILES : 
		suziestoosie.css
		
		NOTE: 
		suziestoosie.js is used to both style the game and the page layout around it.
		
	
	Clogged Memory (jQuery)
	
		Clogged Memory was built using the jQuery framework.
		
		JQUERY FRAMEWORK FILES (Accessed by Google CDN) :
		https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
		
		GAME JS FILES : 
		cloggedmemory.js
		
		GAME CSS FILES : 
		cloggedmemory.css
		
		NOTE: 
		cloggedmemory.js is used to both style the game and the page layout around it.
		

Modifying the Explore Page's Maps and Graphs

	All modifications to the maps and graphs on the explore page are done by logging into the Oceanus projects Tableau account.
	
  Account details to be provided on handover.
