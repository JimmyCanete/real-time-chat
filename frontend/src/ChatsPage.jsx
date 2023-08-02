import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('1eef1ef7-6348-4aff-9a76-680835204e2b', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
        </div>
    )
}

export default ChatsPage;