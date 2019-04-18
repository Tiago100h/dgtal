<%@ Page Title="Rota" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Sistema.aspx.cs" Inherits="Balancas._Sistema" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="Content/estilo.css">

    <div id="site">
        
        <div class="container">

            <form method="post" action="index.html">
                <fieldset>
                    
                    <button class="btn" id="exemplo" style="margin: 10px 0" >Exemplo</button>

                    <div id="divExemplo" style="display:none">

                        <input id="inputFile" type="file" class="btn" />

                        <div>
                            <label for="txtEnderecoPartida">Endereço de partida:</label>
                            <input type="text" id="txtEnderecoPartida" name="txtEnderecoPartida" />
                        </div>
                    
                        <div>
                            <label for="end1">Parada 1:</label>
                            <input type="text" id="end1" name="end" />
                        </div>

                        <div>
                            <label for="end2">Parada 2:</label>
                            <input type="text" id="end2" name="end" />
                        </div>

                        <div>
                            <label for="end3">Parada 3:</label>
                            <input type="text" id="end3" name="end" />
                        </div>
                        
                        <div>
                            <label for="txtEnderecoChegada">Endereço de chegada:</label>
                            <input type="text" id="txtEnderecoChegada" name="txtEnderecoChegada" />
                        </div>

                        <div>
                            <input type="submit" id="btnEnviar" runat="server" name="btnEnviar" value="Enviar" class="btn" />
                        </div>

                    </div>

                </fieldset>
            </form>
        
            <div id="mapa"></div>
            
            <div id="trajeto-texto"></div>
        
        </div>

    </div>

    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyB17R7vT1ZaWnCMuKTaYGOljx5KFdbtLDY&"></script>
    
    <script src="Scripts/mapa.js"></script>

</asp:Content>