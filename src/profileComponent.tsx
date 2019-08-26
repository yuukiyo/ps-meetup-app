import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import styled from 'styled-components'
import { State } from './reducer';
import { HundlerProfile } from './profileContainer';

type ProfileProps = State & HundlerProfile

export const ProfileComponent: React.SFC<ProfileProps> = (props: ProfileProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => props.hundleSubmitHumberger()}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        PS Meetup App
                    </Typography>
                </Toolbar>
            </AppBar>
            <WraperTextField>
                <TextField
                    id="name"
                    label="名前"
                    value={props.name}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => props.hundleUpdateName(e.target.value)}
                />
                <TextField
                    id="furigana"
                    label="ふりがな"
                    value={props.furigana}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => props.hundleUpdateFurigana(e.target.value)}
                />
                <TextField
                    id="email"
                    label="メールアドレス"
                    value={props.email}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => props.hundleUpdateEmail(e.target.value)}
                />
            </WraperTextField>
            <WraperButton>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => props.hundleSubmitButton(
                        props.name,
                        props.furigana,
                        props.email
                    )}
                >送信</Button>
            </WraperButton>
        </div>
    )
}

const WraperTextField = styled.div`
    padding: 30px 50px;
`

const WraperButton = styled.div`
    width: 150px;
    margin: 0 auto;
`