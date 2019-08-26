import { connect } from "react-redux";
import { AppState } from "./store";
import { ProfileComponent } from "./profileComponent";
import { Dispatch } from "redux";
import { Action } from "./action";

export interface HundlerProfile {
    hundleUpdateName(v: string): void
    hundleUpdateFurigana(v: string): void
    hundleUpdateEmail(v: string): void
    hundleSubmitButton(name: string, furigana: string, email: string): void
    hundleSubmitHumberger(): void
}

const hundleUpdateName = (v: string) => async (dispatch: Dispatch) => {
    dispatch(Action.updateName(v))
}

const hundleUpdateFurigana = (v: string) => async (dispatch: Dispatch) => {
    dispatch(Action.updateFurigana(v))
}

const hundleUpdateEmail = (v: string) => async (dispatch: Dispatch) => {
    dispatch(Action.updateEmail(v))
}

const hundleSubmitButton = (name: string, furigana: string, email: string) => async() => {
    alert("以下の内容で送信します。\n\n名前：" + name +　"\nふりがな：" + furigana + "\nメールアドレス：" + email)
}

const hundleSubmitHumberger = () => async() => {
    alert("ハンバーガー！ハンバーガー！")
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        name: appState.state.name,
        furigana: appState.state.furigana,
        email: appState.state.email
    })
}

export default connect(mapStateToProps, {
    hundleUpdateName,
    hundleUpdateFurigana,
    hundleUpdateEmail,
    hundleSubmitButton,
    hundleSubmitHumberger
})(ProfileComponent)