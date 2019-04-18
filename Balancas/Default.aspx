<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Balancas._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

        
    <div style="text-align: center;" >
        <asp:Image runat="server" ImageUrl="dgtal.jpg" Width="30%" />
        <h2>DGTAL</h2>
        <h4>Dando um fim inteligente aos resíduos</h4>
    </div>

    <div class="container" style="text-align: center; margin-top:50px">
        
        <asp:Button runat="server" ID="login" Text="Entrar" OnClick="login_Click" />

    </div>

</asp:Content>