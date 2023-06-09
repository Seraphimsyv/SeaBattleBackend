import { 
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional
} from 'class-validator';
import { Point, Ship } from 'src/types/game.types';

export class GameDto {
  @IsNotEmpty()
  @IsString()
  gameId: string;
}

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  privacy: boolean;

  @IsString()
  password?: string;
}

export class ConnectDto {
  @IsNotEmpty()
  @IsString()
  gameId: string;

  @IsNotEmpty()
  @IsNumber()
  type: number;

  @IsString()
  password: string;
}

export class LocaitonDto {
  @IsNotEmpty()
  @IsNumber()
  x: number;

  @IsNotEmpty()
  @IsNumber()
  y: number;
}

export class GameShotDto extends GameDto {
  @IsNotEmpty()
  location: Point;
}

export class GameShipDto extends GameDto {
  @IsNotEmpty()
  ships: Ship[];
}

export class ChatGetMessagesDto extends GameDto {}

export class ChatNewMessageDto extends GameDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}

type Game = {
  id: string,
  name: string,
  privacy: boolean,
  password: string | undefined,
  status: number
}

type GameList = Game[];

export class ResponseGameListDto {
  games: GameList;
}

export class ResponseGameCreateDto {
  gameId: string;
}

export class ResponseGameConnectDto {
  msg: boolean;
}

export class ResponseGameCheckDto {
  msg: boolean;
}

export class ResponseGamePlayerStatusDto {
  msg: string;
}

export class ResponseGamePlayerUploadDto {
  msg: string;
}

export class ResponseGamePlayerShotDto {
  msg: string;
}

export class ResponseChatSendingDto {
  msg: string;
}