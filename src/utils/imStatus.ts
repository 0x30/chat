import { ConnectionStatus } from "@rongcloud/imlib-v4";
import { ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
import { im } from "./im";

/// 连接状态
export const imStatusReplaySubject = new ReplaySubject<ConnectionStatus>(1);

im.watch({
  status({ status }) {
    imStatusReplaySubject.next(status);
  }
});

/// 是否连接完成
export const imStatusIsSuccess = imStatusReplaySubject.pipe(
  map(status => status === ConnectionStatus.CONNECTED)
);

export const getStatusDesc = (status: ConnectionStatus) => {
  switch (status) {
    case ConnectionStatus.CONNECTED:
      return "连接成功";
    case ConnectionStatus.CONNECTING:
      return "连接中";
    case ConnectionStatus.DISCONNECTED:
      return "正常断开连接";
    case ConnectionStatus.NETWORK_UNAVAILABLE:
      return "网络不可用";
    case ConnectionStatus.CONNECTION_CLOSED:
      return "连接关闭";
    case ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
      return "用户账户在其他设备登录，本机会被踢掉线";
    case ConnectionStatus.WEBSOCKET_UNAVAILABLE:
      return "websocket 连接失败";
    case ConnectionStatus.WEBSOCKET_ERROR:
      return "websocket 报错";
    case ConnectionStatus.BLOCKED:
      return "用户被封禁";
    case ConnectionStatus.DOMAIN_INCORRECT:
      return "域名错误";
    case ConnectionStatus.APPKEY_IS_FAKE:
      return "appkey 不正确";
    case ConnectionStatus.ULTRALIMIT:
      return "互踢次数过多（`count > 5`），此时可能出现：在其它他设备登陆有 reconnect 逻辑";
    case ConnectionStatus.REQUEST_NAVI:
      return "开始请求导航";
    case ConnectionStatus.RESPONSE_NAVI:
      return "请求导航结束";
    case ConnectionStatus.RESPONSE_NAVI_ERROR:
      return " 请求导航失败";
    case ConnectionStatus.RESPONSE_NAVI_TIMEOUT:
      return " 请求导航超时";
  }
};

export const getStatusMode = (
  status: ConnectionStatus
): "success" | "error" | "warning" => {
  if (status === ConnectionStatus.CONNECTED) return "success";
  if (status === ConnectionStatus.CONNECTING) return "warning";
  return "error";
};
