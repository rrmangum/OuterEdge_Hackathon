using HackathonWeb.Models;

namespace HackathonWeb.Services.Interfaces
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
