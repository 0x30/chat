import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { im } from "./im";
import { IReceivedMessageV3 } from "./imType";

export const messagesSubject = new Subject<IReceivedMessageV3>();

im.watch({
  message({ message }) {
    messagesSubject.next(message);
  }
});

export const chatRoomMessageObservable = messagesSubject.pipe(
  filter(mess => mess.type === 4)
);
