using System;
using Persistence;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Application.Activities
{
    public class Delete
    {
    public class Command : IRequest
        {
            public Guid Id { get; set; }
        }
        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                
                if (activity == null)
                    throw new Exception("could not find this specific activity");
                
                //if do find activity remove it
                _context.Remove(activity);

                var success = await _context.SaveChangesAsync() > 0;

                //if okay will return 200 response
                if (success)  return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}