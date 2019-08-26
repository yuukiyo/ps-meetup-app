import actionCreatorFactory, {} from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const Action = {
    updateName: actionCreator<string>('update_name'),
    updateFurigana: actionCreator<string>('update_furigana'),
    updateEmail: actionCreator<string>('update_email')
}