namespace HackathonWeb.Models
{
    public class ChatMessage
    {
        public string MessageText { get; set; }
        public string Subject { get; set; }
        public string Recipient { get; set; }
        public string Sender { get; set; }
        public DateTime Date { get; set; }
        public string MediaUrl { get; set; } 
    }
}
