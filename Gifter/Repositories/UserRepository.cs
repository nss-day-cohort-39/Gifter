using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(u => u.Id == id);
        }

        public void Add(UserProfile user)
        {
            _context.Add(user);
            _context.SaveChanges();
        }

        public void Update(UserProfile user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = GetById(id);
            _context.UserProfile.Remove(user);
            _context.SaveChanges();
        }
    }
}
