#include <SPI.h>
#include <Ethernet.h>
String readString;

int pino[8] = {2, 3, 4, 5, 6, 7, 8, 9};
boolean desligado[8];
int x;

byte mac[] = { 0x48, 0xC2, 0xA1, 0xF3, 0x8D, 0xB7 };

EthernetServer server(80);

void setup()
{
  Serial.begin(9600);

  pinMode(pino[0], OUTPUT);
  pinMode(pino[1], OUTPUT);
  pinMode(pino[2], OUTPUT);
  pinMode(pino[3], OUTPUT);
  pinMode(pino[4], OUTPUT);
  pinMode(pino[5], OUTPUT);
  pinMode(pino[6], OUTPUT);
  pinMode(pino[7], OUTPUT);

  if (Ethernet.begin(mac) == 0) {
    //Serial.println("Failed to configure Ethernet using DHCP");
    for (;;);
  }
  printIPAddress();
  server.begin();

  //Serial.println("Automacao Residencial");
}

void loop()
{
  EthernetClient client = server.available();
  if (client) {
    while (client.connected())
    {
      if (client.available())
      {
        char c = client.read();
        if (readString.length() < 100) {
          readString += c;
        }
        if (c == '\n')
        {
          Serial.println(readString);



          if (readString.indexOf("?ligar") > 0)
          {
            x = readString.substring(13, 14).toInt();
            digitalWrite(pino[x - 1], LOW);
            desligado[x - 1] = false;
          }
          else if (readString.indexOf("?desligar") > 0)
          {
            x = readString.substring(16, 17).toInt();
            digitalWrite(pino[x - 1], HIGH);
            desligado[x - 1] = true;
          }

          readString = "";

          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println();
          client.print("<!DOCTYPE html><html lang='pt-br'><head>    <meta charset='UTF-8'>    <title>Taveira's House</title>    <link rel='stylesheet' type='text/css' href='https://cdn.rawgit.com/denistaveira/MulitDeviceControl/6a38d3f0/styles.css'></head><body><H1 align='center'>Taveira's House</H1><div id='botao_01'></div><div id='estado_01' style='visibility: hidden;'>");
          client.print(desligado[0]);
          client.print("</div><div id='botao_02'></div><div id='estado_02' style='visibility: hidden;'>");
          client.print(desligado[1]);
          client.print("</div><div id='botao_03'></div><div id='estado_03' style='visibility: hidden;'>");
          client.print(desligado[2]);
          client.print("</div><div id='botao_04'></div><div id='estado_04' style='visibility: hidden;'>");
          client.print(desligado[3]);
          client.print("</div><div id='botao_05'></div><div id='estado_05' style='visibility: hidden;'>");
          client.print(desligado[4]);
          client.print("</div><div id='botao_06'></div><div id='estado_06' style='visibility: hidden;'>");
          client.print(desligado[5]);
          client.print("</div><div id='botao_07'></div><div id='estado_07' style='visibility: hidden;'>");
          client.print(desligado[6]);
          client.print("</div><div id='botao_08'></div><div id='estado_08' style='visibility: hidden;'>");
          client.print(desligado[7]);
          client.print("</div><script src='https://cdn.rawgit.com/denistaveira/MulitDeviceControl/b03f5c8f/controle.js' charset='utf-8'></script></body></html>");
          delay(1);
          client.stop();
        }
      }
    }
  }
}

void printIPAddress()
{
  for (byte thisByte = 0; thisByte < 4; thisByte++) {
    Serial.print(Ethernet.localIP()[thisByte], DEC);
    //Serial.print(".");
  }
  Serial.println();
}

