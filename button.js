// BUTTON LIST
const rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]

const sections = [{title: "Section 1", rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: "Hello it's list message",
 sections: sections,
 listType: 1
}

const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)

// BUTTON MESSAGE
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)

// THX BAILEYS | BUTTON MESSAGE
