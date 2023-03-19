using HackathonWeb.Models;
using HackathonWeb.Services.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace HackathonWeb.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
        }
    }
}
