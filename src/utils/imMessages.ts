import { IReceivedMessageV3 } from "@rongcloud/imlib-v4";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { im } from "./im";

export const messagesSubject = new Subject<IReceivedMessageV3>();

im.watch({
  message({ message }) {
    messagesSubject.next(message);
  }
});

export const chatRoomMessageObservable = messagesSubject.pipe(
  filter(mess => mess.type === 4)
);
