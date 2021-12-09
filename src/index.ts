enum ConsoleType { INFO, LOG, ERROR }
let prePendMessage = {
  INFO: "Look at the big Ouput on Benny: ",
  ERROR: "I'm tired of these MFing errors in this MFing program: ",
  LOG: "Ah Console.log, when you absolutely have to see everything. Accept no subsitutes: "
}
const Samuel = {
  log: {
    jackson: function(msg:string, msgType: ConsoleType) {
      switch(msgType){
        case ConsoleType.INFO:
          console.info(prePendMessage.INFO + msg)
          break
        case ConsoleType.ERROR:
          console.error(prePendMessage.ERROR + msg)
          break
        case ConsoleType.LOG:
          console.log(prePendMessage.LOG + msg)
        break
      } 
    }
  },
  INFO: ConsoleType.INFO,
  LOG: ConsoleType.LOG,
  ERROR: ConsoleType.ERROR
}

export default Samuel