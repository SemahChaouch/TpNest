import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';
import { CvsService } from '../cvs/cvs.service';
import { Cv } from '../cvs/entities/cv.entity';
import { randEmail, randFirstName, randJobTitle, randLastName, randNumber, randPassword, randSkill, randUser, randUserName } from '@ngneat/falso';
import { SkillsService } from '../skills/skills.service';
import { User } from '../user/entities/user.entity';
import { Skill } from '../skills/entities/skill.entity';
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const cvService = app.get(CvsService);
  const userService = app.get(UserService);
  const skillService = app.get(SkillsService);
  //const users = await userService.getAllUsers();
  for(let i=0;i<10;i++){
    const newCv = new Cv();
    const newUser= new User()
    const newSkill = new Skill()
    newCv.Firstname = randFirstName();
    newCv.name = randLastName();
    newCv.job = randJobTitle();
    newCv.cin = randNumber();
    newCv.age = randNumber();
    newCv.path='';
    newCv.user=newUser;
    newUser.username=randUserName();
    newUser.password=randPassword();
    newUser.email=randEmail();
    newSkill.designation=randSkill();
    newSkill.cvs=[newCv]
    await skillService.addskill(newSkill);
    await userService.adduser(newUser)
    await cvService.addcv(newCv, newUser);}
  await app.close();
}
bootstrap();