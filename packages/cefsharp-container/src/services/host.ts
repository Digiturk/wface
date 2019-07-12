

export default class Host {
  //@ts-ignore
  static host: any = window.jsHost;

  private static async SendCommand(command: Command): Promise<CommandResult> {
    return new Promise<CommandResult>((resolve, reject) => {
      const commandStr = JSON.stringify(command);
      this.host.process(commandStr).then(response => {
        const commandResult = JSON.parse(response) as CommandResult;
        if(commandResult.Status === "OK") {
          resolve(commandResult.Body);
        }
        else{
          reject(commandResult.Message);
        }        
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public static async EchoMessage(message: string): Promise<string> {
    return await this.SendCommand({ Name: "ECHO", Parameter: 'text' }) as any;    
  }

  public static async OpenForm(formName, messageCode, parameters: any): Promise<string> {
    return await this.SendCommand({
      Name: "OPEN_FORM",
      Parameter: JSON.stringify({
        Name: formName,
        MessageCode: messageCode,
        Args: parameters
      })
    }) as any;
  }

  public static async RunService(service: string, parameters: any): Promise<string> {
    return await this.SendCommand({
      Name: "RUN_SERVICE",
      Parameter: JSON.stringify({
        Service: service,
        Parameters: parameters
      })
    }) as any;    
  }
}

interface Command {
  Name: string;
  Parameter: any;
}

interface CommandResult {
  Status: "OK" | "ERROR";
  Message: string;
  Body: any;
}