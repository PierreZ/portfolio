FROM scratch
MAINTAINER Pierre Zemb <pierre.zemb@linux.com>

# Add website
ADD . /srv/http

# Create /data volume
VOLUME /srv/http