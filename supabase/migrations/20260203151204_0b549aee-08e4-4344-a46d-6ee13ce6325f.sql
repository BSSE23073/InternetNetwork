-- Drop overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON public.contact_submissions;

-- Note: The edge function uses service role key which bypasses RLS,
-- so it can still read/update submissions. No SELECT/UPDATE policies needed for now.
-- If you add an admin dashboard later, we can add role-based policies.